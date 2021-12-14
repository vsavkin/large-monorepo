import { render } from '@testing-library/react';

import Icon39 from './icon39';

describe('Icon39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon39 />);
    expect(baseElement).toBeTruthy();
  });
});
