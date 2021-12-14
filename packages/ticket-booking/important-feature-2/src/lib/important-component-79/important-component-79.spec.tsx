import { render } from '@testing-library/react';

import ImportantComponent79 from './important-component-79';

describe('ImportantComponent79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent79 />);
    expect(baseElement).toBeTruthy();
  });
});
