import { render } from '@testing-library/react';

import Icon16 from './icon16';

describe('Icon16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon16 />);
    expect(baseElement).toBeTruthy();
  });
});
