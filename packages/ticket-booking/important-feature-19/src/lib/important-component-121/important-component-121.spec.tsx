import { render } from '@testing-library/react';

import ImportantComponent121 from './important-component-121';

describe('ImportantComponent121', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent121 />);
    expect(baseElement).toBeTruthy();
  });
});
