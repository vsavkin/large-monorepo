import { render } from '@testing-library/react';

import ImportantComponent213 from './important-component-213';

describe('ImportantComponent213', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent213 />);
    expect(baseElement).toBeTruthy();
  });
});
