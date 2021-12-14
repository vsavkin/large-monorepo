import { render } from '@testing-library/react';

import Icon25 from './icon25';

describe('Icon25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon25 />);
    expect(baseElement).toBeTruthy();
  });
});
