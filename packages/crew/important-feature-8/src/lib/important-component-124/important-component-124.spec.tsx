import { render } from '@testing-library/react';

import ImportantComponent124 from './important-component-124';

describe('ImportantComponent124', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent124 />);
    expect(baseElement).toBeTruthy();
  });
});
