import { render } from '@testing-library/react';

import ImportantComponent178 from './important-component-178';

describe('ImportantComponent178', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent178 />);
    expect(baseElement).toBeTruthy();
  });
});
