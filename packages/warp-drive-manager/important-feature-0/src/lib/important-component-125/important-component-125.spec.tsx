import { render } from '@testing-library/react';

import ImportantComponent125 from './important-component-125';

describe('ImportantComponent125', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent125 />);
    expect(baseElement).toBeTruthy();
  });
});
