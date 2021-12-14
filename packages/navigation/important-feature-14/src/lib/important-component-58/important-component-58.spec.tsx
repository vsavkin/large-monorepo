import { render } from '@testing-library/react';

import ImportantComponent58 from './important-component-58';

describe('ImportantComponent58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent58 />);
    expect(baseElement).toBeTruthy();
  });
});
