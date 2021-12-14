import { render } from '@testing-library/react';

import Icon148 from './icon148';

describe('Icon148', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon148 />);
    expect(baseElement).toBeTruthy();
  });
});
