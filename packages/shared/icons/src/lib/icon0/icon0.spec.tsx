import { render } from '@testing-library/react';

import Icon0 from './icon0';

describe('Icon0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon0 />);
    expect(baseElement).toBeTruthy();
  });
});
