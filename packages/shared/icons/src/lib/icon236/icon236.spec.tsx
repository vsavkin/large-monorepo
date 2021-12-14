import { render } from '@testing-library/react';

import Icon236 from './icon236';

describe('Icon236', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon236 />);
    expect(baseElement).toBeTruthy();
  });
});
