import { render } from '@testing-library/react';

import Icon72 from './icon72';

describe('Icon72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon72 />);
    expect(baseElement).toBeTruthy();
  });
});
