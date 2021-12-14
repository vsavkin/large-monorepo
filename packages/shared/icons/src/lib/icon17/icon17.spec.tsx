import { render } from '@testing-library/react';

import Icon17 from './icon17';

describe('Icon17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon17 />);
    expect(baseElement).toBeTruthy();
  });
});
