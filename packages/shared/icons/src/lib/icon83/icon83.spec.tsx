import { render } from '@testing-library/react';

import Icon83 from './icon83';

describe('Icon83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon83 />);
    expect(baseElement).toBeTruthy();
  });
});
