import { render } from '@testing-library/react';

import Icon138 from './icon138';

describe('Icon138', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon138 />);
    expect(baseElement).toBeTruthy();
  });
});
