import { render } from '@testing-library/react';

import ImportantComponent189 from './important-component-189';

describe('ImportantComponent189', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent189 />);
    expect(baseElement).toBeTruthy();
  });
});
